const { default: SafeIcon } = require("../common/SafeIcon");

const StoryComponent = ({ icon, title, text }) => (
  <>
    <div className="row-span-2 flex items-start">
      <SafeIcon name={icon} className="text-accent-600 mt-1 text-2xl" />
    </div>
    <div className="row-span-2 grid grid-rows-[auto_1fr]">
      <h3 className="text-lg font-semibold text-accent-600 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  </>
);

export default StoryComponent