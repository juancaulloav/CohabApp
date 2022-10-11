import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const CohabApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
