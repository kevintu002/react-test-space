import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [data, setData] = useState(null);
  
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then((response) => {
      setMenu(response.data);
    })
  }, [])

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then((response) => {
      setNewsFeed(response.data);
    })
  }, [])

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then((response) => {
      setFriends(response.data);
    })
  }, [])

  // useEffect(() => {
  //   get('/menu').then((response) => {
  //     setMenu(response.data);
  //   })
  //   get('/news-feed').then((response) => {
  //     setNewsFeed(newsFeedResponse.data);
  //   })
  //   get('/friends').then((response) => {
  //     setFriends(friendsResponse.data);
  //   })
  //   // Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
  //   //   ([menuResponse, newsFeedResponse, friendsResponse]) => {
  //   //     setMenu(menuResponse.data);
  //   //     setNewsFeed(newsFeedResponse.data);
  //   //     setFriends(friendsResponse.data);
  //   //     // setData({
  //   //     //   menu: menuResponse.data,
  //   //     //   newsFeed: newsFeedResponse.data,
  //   //     //   friends: friendsResponse.data
  //   //     // });
  //   //   }
  //   // );
  // }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
