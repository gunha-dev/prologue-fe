import { ElMessageBox } from "element-plus";

export const loginAlertMsg = async (msg, title, cb) => {
  await ElMessageBox.alert(msg, title, {
    confirmButtonText: "확인",
  });
  if (cb && typeof cb === "function") {
    cb();
  }
};
