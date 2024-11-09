import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Components/MyNavBar';
import Tags from './Components/Tags';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)

  const [DefaultTag, SetDefaultTag] = useState("Illustration");
  const [IsSafe, SetIsSafe] = useState(true)
  const [refresh, setRefresh] = useState(0);

  const handleSwitchChange = () => {
    setRefresh((prev) => prev + 1);
    SetIsSafe(!IsSafe)
  };


  function DefaultTagSetter(PassedTag) {
    //console.log(PassedTag);
  }
  function SafeSetter(issafe) {
    //console.log(issafe)
    SetIsSafe(issafe)

  }
  //console.log(GetImageByTag)


  return (
    <>
      <MyNavBar SafeSetter={SafeSetter} onSwitchChange={handleSwitchChange} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Tags sm={4} MyTagSetter={DefaultTagSetter} setProgress={setProgress} IsSafe={IsSafe} refresh={refresh} />


    </>
  )
}

export default App
