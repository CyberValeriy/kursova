import cron from "cron";
import { TestModel, QuestionModel, StudentModel } from "../database/models";

export default () => {
  //   cron.job(
  //     "0 0 * * *",
  //     async () => {
  //       console.log("SCHEDULED");
  //       const tests = await TestModel.find({
  //         endDate: {
  //           $lte: new Date(new Date().setDate(new Date().getDate() - 1)),
  //         },
  //       });
  //       if (tests.length == 0) {
  //         return;
  //       }
  //       const ids = [];
  //       for (const el of tests) {
  //         ids.push(el._id);
  //       }
  //       await TestModel.deleteMany({ _id: { $in: ids } });
  //       await QuestionModel.deleteMany({ test_id: { $in: ids } });
  //       await StudentModel.updateMany(
  //         { tests: { $in: ids } },
  //         { $pull: { tests: ids } }
  //       );
  //     },
  //     null,
  //     true
  //   );
};
