import { Profile,  } from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import { Container } from 'App.styled'
import user from './datajson/user.json'
import data from './datajson/data.json'
import friends from './datajson/friends.json'
import transactions from './datajson/transactions.json'

import './App.css';

function App() {
  return (
    <Container>
<Profile user = {user}
 username={user.username}
 tag={user.tag}
 location={user.location}
 avatar={user.avatar}
 followers={user.stats.followers}
 views={user.stats.views}
 likes = {user.stats.likes}/>
 <Statistics title="Upload stats" stats = {data}/>
 <FriendList friends = {friends}/>
 <TransactionHistory items={transactions} 
 />
    </Container>
    
  );
}

export default App;
