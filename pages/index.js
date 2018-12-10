import Page from '../components/Page';

const Home = () => (
  <div>
    <Page>
      <div styles={{ textAlign: 'center' }}>
        <img
          alt="cat"
          src="/static/cat.jpg"
          styles={{
            width: '100%',
            height: "auto",
          }}
        />
      </div>
    </Page>
  </div>
);

export default Home;
