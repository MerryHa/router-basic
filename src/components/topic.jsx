import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

const Topic = ({ topics }) => {
    const params = useParams();
    const location = useLocation();
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
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
        <div className='topic'>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            {location && <p>{location.search}</p>}
        </div>

    );
}

export default Topic;