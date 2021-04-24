import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Topic from './topic';

const Topics = (props) => {
    const [topics, setTopics] = useState([
        { id: 'route', title: '< Route >', description: 'Its most basic responsibility is to render some UI when its path matches the current URL.' },
        { id: 'link', title: '< Link >', description: 'Provides declarative, accessible navigation around your application.' },
        { id: 'switch', title: '< Switch >', description: 'Renders the first child <Route> or <Redirect> that matches the location.' },
    ]);
    return (
        <div className='topics'>
            <h1>Topics</h1>
            <div className='topics-cotainer'>
                <ul>
                    {topics.map(topic => <li key={topic.id}>
                        <NavLink to={`/topics/${topic.id}`}>{topic.title}</NavLink>
                    </li>)}
                </ul>
                <Route path="/topics/:topicId">
                    <Topic topics={topics} />
                </Route>
            </div>
        </div>
    );

};
export default Topics;


