import JobList from '../../components/Jobs/JobList';
import JobForm from '../../components/Jobs/JobForm';
import JobCalendar from '../../components/Jobs/JobCalendar';

const JobsPage = () => (
  <div className="jobs-page">
    <JobForm shipId="s1" componentId="c1" />
    <JobList shipId="s1" />
    <JobCalendar />
  </div>
);
export default JobsPage;