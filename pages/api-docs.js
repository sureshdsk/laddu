import { createSwaggerSpec } from 'next-swagger-doc';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import apiSpec from '../openapi.json';


const ApiDoc = ({ spec }) => {
    return <SwaggerUI spec={spec} />;
};

export const getStaticProps = async ctx => {
    const spec = createSwaggerSpec({
        definition: apiSpec,
    });
    return {
        props: {
            spec,
        },
    };
};

export default ApiDoc;