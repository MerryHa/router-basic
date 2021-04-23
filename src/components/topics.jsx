import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Topic from './topic';

const Topics = (props) => {
    const [topics, setTopics] = useState([
        { id: 'route', title: 'Route', description: 'Route is ...' },
        { id: 'link', title: 'Link', description: 'Link is ...' },
        { id: 'switch', title: 'Switch', description: 'Switch is ...' },
    ]);
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {topics.map(topic => <li key={topic.id}>
                    <NavLink to={`/topics/${topic.id}`}>{topic.title}</NavLink>
                </li>)}
            </ul>
            <Route path="/topics/:topicId">
                <Topic topics={topics} />
            </Route>
        </div>
    );

};
export default Topics;


