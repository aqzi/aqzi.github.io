import Inferno from 'inferno';
import { Router, Route, IndexRoute, Link, IndexLink } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.less';
import {Inleiding} from './inleiding';
import {Onderverdeling} from './onderverdeling';
import {Bewapening} from './bewapening';
import {Veldslagen} from './veldslagen';
import {Besluit} from './besluit';
import {Bronnen} from './bronnen';

const browserHistory = createBrowserHistory();


function App({ children }) {
  return (
  <div class="page">
    <header>
      <h1>Het Romeinse Leger</h1>
      <nav>
        <ul>
          <li><Link to={'/oclat'} activeClassName="linkActiveClass" >Inleiding</Link></li>
          <li><Link to={'/oclat/onderverdeling'} activeClassName="linkActiveClass" >onderverdeling</Link></li>
          <li><Link to={'/oclat/bewapening'} activeClassName="linkActiveClass" >bewapening</Link></li>
          <li><Link to={'/oclat/veldslagen'} activeClassName="linkActiveClass" >veldslagen</Link></li>
          <li><Link to={'/oclat/besluit'} activeClassName="linkActiveClass" >besluit</Link></li>
          <li><Link to={'/oclat/bronnen'} activeClassName="linkActiveClass" >bronnen</Link></li>
        </ul>
      </nav>
    </header>

    <section class="content">
      {children}
    </section>

    <footer>
      <span>mei 2017</span>
      <span>Kosh 6LWib</span>
      <span>Aquila Ziedins (6), Tobias Alexander (1)</span>
    </footer>
  </div>
  );
}

function NoMatch({ children }) {
  return <div>Hier bent u uit het Romeinse rijk</div>
}

const routes = (
  <Router history={ browserHistory }>
    <Route path="/oclat" component={ App }>
      <IndexRoute component={ Inleiding }/>
      <Route path="/oclat" component={ Inleiding } />
      <Route path="/oclat/onderverdeling" component={ Onderverdeling } />
      <Route path="/oclat/bewapening" component={ Bewapening } />
      <Route path="/oclat/veldslagen" component={ Veldslagen } />
      <Route path="/oclat/besluit" component={ Besluit } />
      <Route path="/oclat/bronnen" component={ Bronnen } />
      <Route path="*" component={ NoMatch }/>
    </Route>
  </Router>
);

Inferno.render(routes, document.getElementById('app'));


