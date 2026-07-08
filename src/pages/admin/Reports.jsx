import AdminLayout from "../../components/admin/AdminLayout";
import ReportStatistics from "../../components/admin/reports/ReportStatistics";
import ReportFilter from "../../components/admin/reports/ReportFilter";
import ReportTable from "../../components/admin/reports/ReportTable";

export default function Reports() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          Reports
        </h1>

        <ReportStatistics />

        <ReportFilter />

        <ReportTable />

      </div>

    </AdminLayout>
  );
}