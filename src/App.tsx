import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { ShoppingCartProvider } from "./context/CartProvider";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <AppLayout />
        <Toaster
          position="top-center"
          gutter={3}
          reverseOrder={false}
          toastOptions={{
            success: {
              duration: 6000,
            },
          }}
        />
      </QueryClientProvider>
    </ShoppingCartProvider>
  );
};

export default App;
