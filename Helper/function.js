const apiMsg = (msg = "SuccessFully", data = []) => {
  return {
    msg,
    data,
  };
};

module.exports = { apiMsg };
