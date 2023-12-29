import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialIcons } from "./material-icons";
import { FontAwesome5 } from "./fa5-icons";
import { AppNavigator } from "./src/navigation/navigator.component";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, MaterialIcons, FontAwesome5]} />
      <StatusBar hidden={true} />
      <ApplicationProvider {...eva} theme={{ ...eva.light }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}

