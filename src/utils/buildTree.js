export default (items) => {
  let tree = {};
  const recurse = (items, parent, parentId) => {
    let children = items.filter((item) => item.parentId === parentId);
    children.forEach((child) => {
      if (child.type === 'object') {
        if (Array.isArray(parent)) {
          let index = parent.push({}) - 1;
          recurse(items, parent[index], child.id);
        } else {
          parent[child.name] = {};
          recurse(items, parent[child.name], child.id);
        }
      } else if (child.type === 'array') {
        if (Array.isArray(parent)) {
          let index = parent.push([]) - 1;
          recurse(items, parent[index], child.id);
        } else {
          parent[child.name] = [];
          recurse(items, parent[child.name], child.id);
        }
      } else {
        const value = child.type === 'number' ? parseFloat(child.value) : child.value;
        if (Array.isArray(parent)) {
          parent.push(value)
        } else {
          parent[child.name] = value;
        }
      }
    });
  };
  recurse(items, tree, null);
  return tree;
};
