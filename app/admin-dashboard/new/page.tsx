import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NewPropertyForm from "./new-property-form";

export default function NewProperty() {
  return (
    <div>
      <Breadcrumbs items={[
        { href: "/admin-dashboard", label: "Dashboard" },
        { label: "New Propery" }
      ]} />
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            New Property
          </CardTitle>
          <CardContent>
            <NewPropertyForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}