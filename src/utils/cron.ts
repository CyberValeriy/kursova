import cron from "cron";
import { TestModel, QuestionModel } from "../database/models";

export const runCron = () => {
  cron.job(
    "",
    async () => {
      const tests = await TestModel.find({
        endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      });
      if (tests.length == 0) {
        return;
      }
      const ids = [];
      for (const el of tests) {
        ids.push(el._id);
      }
      await TestModel.deleteMany({ _id: { $in: ids } });
      await QuestionModel.deleteMany({ test_id: { $in: ids } });
    },
    null,
    true
  );
};
