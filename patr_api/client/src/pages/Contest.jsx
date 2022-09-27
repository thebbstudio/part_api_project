import React from 'react';
import ContestBlock from '../components/ContestBlock/ContestBlock';
import HttpService from '../http/HttpService';

function Contest() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    await HttpService.getContest({ format: 'json' })
      .then((res) => res.data)
      .then((contests) => setData(contests.data));
  };

  const vote = async (id) => {
    await HttpService.voteContest({ format: 'json', id })
      .then(() => {
        getData();
      });
  };

  React.useEffect(() => { getData(); }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Конкурс</h1>
      {data && (
        <div style={{ display: 'flex' }}>
          {data.map((contest) => (
            <ContestBlock
              id={contest.id}
              count={contest.count}
              title={contest.title}
              url={contest.url}
              description={contest.description}
              vote={vote}
              key={contest.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contest;
