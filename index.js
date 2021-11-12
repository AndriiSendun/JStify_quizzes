  function isValueExistInTree(data, target) {
    const [ value, left, right ] = data;

    let isValueExist = false;
    
    if (value === target) {
      return true;
    }

    if(Array.isArray(left)) {
      isValueExist = isValueExistInTree(left, target);
    }

    if(!isValueExist && Array.isArray(right)) {
      isValueExist = isValueExistInTree(right, target);
    }
    
    return isValueExist;
  }
