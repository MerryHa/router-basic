import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

const Topic = ({ topics }) => {
    const params = useParams();

    const [topic, setTopic] = useState({
        title: 'Sorry',
        description: 'Not Found',
    });
    useEffect(() => {
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === Number(params.topicId)) {
                setTopic(topics[i]);
                break;
            }
        }
    }, [topics, params]);

    return (
        <>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
        </>

    );
}

export default Topic;