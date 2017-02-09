export default (arr, id, mapper) => {
  const recurse = (objs, id) => {
    objs.forEach((child) => {
      if (child.parentId === id && child.hasChildren) {
        child = mapper(child);
        recurse(objs, child.id);
      }
    });
  };
  recurse(arr, id);
};
