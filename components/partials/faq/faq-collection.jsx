import Card from "~/components/features/accordion/card";
import withApollo from '~/server/apolloClient';
import { useQuery } from '@apollo/client';
import { GET_FAQS } from '~/server/queries';


function FaqCollection (props) {
    const {data, loading} = useQuery(GET_FAQS);
    return (
        <>
        {data ? data.faqs.filter(item => item.faq_type === props.filter).map(item => 
            <div key={item._id}>
                <Card title={item.question} expanded={ true }>
                    <p className="mb-0">{item.answer}</p>
                </Card>
            </div>
            ) :
            <>

            </>
        }
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } ) ( FaqCollection );