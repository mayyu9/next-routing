import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications(){
    return( <Card>
        <div>
        <div>
            Notifications component!!
        </div>
        <Link href="/complex-dashboard/archived">Archived component</Link>
        </div>
        </Card>)
};
