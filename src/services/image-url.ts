const resizeImage = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default resizeImage;

// 参数说明:

// url: string：函数的参数，类型为字符串。这个字符串代表图片的 URL 地址。
// 目标字符串:

// const target = "media/";：定义了一个目标字符串 target，用于在 URL 中查找特定位置。
// 查找目标位置:

// const index = url.indexOf(target) + target.length;：在 url 中查找 target 的位置，并计算 target 之后的索引。indexOf(target) 找到 target 在 url 中第一次出现的索引，加上 target.length 则得到 target 末尾的索引位置。
// 构造新的 URL:

// return url.slice(0, index) + "crop/600/400/" + url.slice(index);：函数返回一个新的 URL。
// url.slice(0, index)：获取从 URL 开头到 target 末尾的子字符串。
// "crop/600/400/"：在目标位置插入这段字符串，表示对图像进行裁剪，并设置裁剪后的宽度为 600 像素，高度为 400 像素。
// url.slice(index)：获取目标位置之后的 URL 部分。
