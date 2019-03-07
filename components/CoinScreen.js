import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import Img from './Img';

/* Class that fetches data from CoinMarketCap API endpoint and renders individual screen
with a coin's price, market cap, and circulating supply.
*/
export default class CoinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }

    }

    /* Fetches data from API endpoint with query parameters */
    async getCoinData() {
        var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        var key = 'e418e4db-1b73-4680-94f2-88756c64c41b'
        var queryStr = '?CMC_PRO_API_KEY=' + key + '&start=1&limit=3';
        return fetch(url + queryStr)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })
        })
        .catch((error) => {
            console.log(error)});
    }

    /* Calls 'getCoinData' when component is rendered. */
    componentDidMount(){
        this.getCoinData();
    }

    render() {

        const coins = this.state.dataSource;

        /* Displays loading circle if JSON has not yet loaded into 'dataSource'. */
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                 </View>
             );
        }

    /* View of screen. The 'index' value of props determines which coin to display
    by indexing into the JSON's 'data' array.
    */
    return (
        <View style={styles.container}>
            <Text style={styles.coin_text}> {coins.data[this.props.index].name} </Text>
            <Text> ({coins.data[this.props.index].symbol}) </Text>
            <Img type={coins.data[this.props.index].symbol} />
            <Text style={styles.coin_text}> Price: </Text>
            <Text style={styles.coin_info}> ${coins.data[this.props.index].quote.USD.price} USD </Text>
            <Text style={styles.coin_text}> Market Cap: </Text>
            <Text style={styles.coin_info}> ${coins.data[this.props.index].quote.USD.market_cap} USD </Text>
            <Text style={styles.coin_text}> Circulating Supply: </Text>
            <Text style={styles.coin_info}> {coins.data[this.props.index].circulating_supply} {coins.data[this.props.index].symbol} </Text>
        </View>
    );
  }
}

/* Stylesheet for view of screen. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightcyan'
  },
  coin_text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  coin_info: {
      fontSize: 14,
      fontWeight: 'normal',
      color: 'black'
    },

});