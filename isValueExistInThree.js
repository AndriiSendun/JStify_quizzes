const arr = [ 3, [ 8, [ 5, null, null ], null ], [ 7, null, null ] ];

function shouldSearchInNodes(isValueExist, node) {
  return !isValueExist && Array.isArray(node)
}

function isArrayIncludesTarget(data, target) {
  return data.includes(target);
}

function isValueExistInTreeRecursion(data, target) {
  const [ , leftNode, rightNode ] = data;

  let isValueExist = false;

  if (isArrayIncludesTarget(data, target)) {
    isValueExist = true;
  }

  if(shouldSearchInNodes(isValueExist, leftNode)) {
    isValueExist = isValueExistInTree(leftNode, target);
  }

  if(shouldSearchInNodes(isValueExist, rightNode)) {
    isValueExist = isValueExistInTree(rightNode, target);
  }

  return isValueExist;
}

function isValueExistInTree(data, target) {
  return data.flat(Infinity).includes(target);
}
