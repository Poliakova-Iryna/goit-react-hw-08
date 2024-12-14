import s from './Home.module.css'

const Home = () => {
    return (
        <div className={s.wrapper}> 
            <h1>                
              Welcome! This application will help you keep your contacts in order! 
              You can add a new contact, delete it, and also use the search. Enjoy!
            </h1>
        </div>
    )
};

export default Home;