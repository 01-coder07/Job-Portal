import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-6 shadow-sm hover:shadow-lg transition duration-300 rounded-lg bg-white">
      {/* Company logo */}
      <div className="flex items-center justify-between">
        <img className="h-8 object-contain" src={job.companyId?.image} alt="" />
      </div>

      {/* Job title */}
      <h4 className="font-semibold text-xl mt-3 text-gray-800">{job.title}</h4>

      {/* Location + Level */}
      <div className="flex items-center gap-3 mt-3 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-blue-600">
          {job.location}
        </span>

        <span className="bg-red-50 border border-red-200 px-3 py-1 rounded-full text-red-500">
          {job.level}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-gray-500 text-sm mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      {/* Buttons */}
      <div className="mt-5 flex gap-3 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer transition"
        >
          Apply now
        </button>

        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-600 border border-gray-300 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer transition"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;