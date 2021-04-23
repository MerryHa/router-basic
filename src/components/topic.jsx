import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';

const Topic = ({ topics }) => {
    const params = useParams();
    const match = useRouteMatch();
    console.log('topic', match);
    const [topic, setTopic] = useState({
        title: 'Sorry',
        description: 'Not Found',
    });
    useEffect(() => {
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === params.topicId) {
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