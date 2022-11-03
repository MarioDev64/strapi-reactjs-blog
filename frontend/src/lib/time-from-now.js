import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const timeFromNow = (time) => {
  return dayjs(time).fromNow();
};

export default timeFromNow;