import Wrapper from '@/components/wrapper';

interface Params {
    id: string;
}

interface TicketDetailsProps {
    params: Params;
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
    return (
        <Wrapper>
            <div className="grid grid-cols-1 lg:grid-cols-4 space-x-20">
                <div>product details {params.id}</div>
                <div>ordering panel</div>
            </div>
        </Wrapper>
    );
}