import Head from 'next/head';

export default () => (
    <>
        <Head>
            <title>Spotify Error Connection</title>
      </Head>
        <div className="container">
            <h1>Spotify Website Connection Error</h1>
            <h2 className="error-message">When offline, any route will fallback to this page</h2>
            <div className="error-pict">
                <img className="error-logo" src="/icons/error.png" alt="error" />
          </div>
            <div className="btn-group">
                <button
                    onClick={() => {
                        router.back();
                    }}
              >
                  Return
              </button>
          </div>
      </div>
  </>
);
