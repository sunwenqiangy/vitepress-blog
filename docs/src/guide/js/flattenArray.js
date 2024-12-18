 // 将一个多维数组展开成一个一维数组
// 例如：[1, [2, 3, [4, 5]], 6, [7, 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
function flattenArray(list) {
  return list.reduce((result, item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
    return result;
  }, [])
}

const arr = [1, [2, 3, [4, 5]], 6, [7, 8], 9];
console.log(flattenArray(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]