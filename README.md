# Wallet Connect proxy for universal link

This redirection configuration is used as part of the WalletConnect integration for Ledger Live.

Contrary to a classic configuration based only on a simple redirection link, we use here a universal link. The universal link is responsible for redirecting users who have not yet installed Ledger Live to the appropriate store so that they can first download the software.

Our universal link provider needs us to add query parameters in the url (adj_t & adj_campaign) however WalletConnect automatically suffixes the url like this `wc?uri=xxx`. This redirection is a workaround that provides a blank URL (i.e an URL that doesn't include the query parameters required by our universal link provider) to WalletConnect. Thanks to that, WalletConnect is free to add what it needs to the url, then the configuration in this repository will redirect the user to the final URL taking care to add the query parameters of the universal link provider.
