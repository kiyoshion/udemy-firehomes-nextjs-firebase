import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import PropertiesTable from "./properties-table";

export default async function AdminDashboard({
  searchParams,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
}) {
  const searchparamsValue = await searchParams;
  console.log(searchparamsValue)
  return (
    <div>
      <Breadcrumbs items={[
        { label: "Dashboad" },
      ]} />
      <h1 className="text-4xl font-bold mt-6">Admin Dashboard</h1>
      <Button asChild className="inline-flex pl-2 gap-2 mt-4">
        <Link href="/admin-dashboard/new">
          <PlusCircleIcon/> Add Property
        </Link>
      </Button>
      <PropertiesTable page={searchparamsValue?.page ? parseInt(searchparamsValue.page) : 1} />
    </div>
  );
}