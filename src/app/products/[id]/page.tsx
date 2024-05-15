import Wrapper from "@/components/wrapper";


export default async function TicketDetails({params}) {

    return (
        <Wrapper>
            <div className={"grid grid-cols-1 lg:grid-cols-4 space-x-20"}>
                <div>
                    product details
                </div>
                <div>
                    ordering panel
                </div>
            </div>
        </Wrapper>
    )
}