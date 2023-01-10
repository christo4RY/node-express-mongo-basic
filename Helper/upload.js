const fileUpload = async (req, res, next) => {
  const file = req.files.avatar;
  const filename = new Date().valueOf() + "_" + file.name;
  file.mv(`./Images/${filename}`);
  req.body["avatar"] = filename;
  next();
};

const multipleFileUpload = async (req, res, next) => {
  let filenames = [];
  const files = req.files.avatar;
  files.forEach((file) => {
    let filename = new Date().valueOf() + "_" + file.name;
    file.mv(`./Images/${filename}`);
    filenames.push(filename);
  });
  req.body["avatar"] = filenames.join(",");
  next();
};

module.exports = {
  multipleFileUpload,
  fileUpload,
};
