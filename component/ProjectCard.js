import React from "react";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

import { Component } from "react";
import { Image, Linking, View } from "react-native";

const Header = ({ title, tag }) => (
  <View>
    <Text
      category="h6"
      style={{
        textAlign: "center",
        backgroundColor: "gray",
        color: "white",
        paddingVertical: 5,
      }}
    >
      {title}
    </Text>
    {tag !== "" ? <Text style={{ textAlign: "center" }}>{tag}</Text> : null}
  </View>
);

const Footer = ({ href }) => (
  <Layout
    style={{ justifyContent: "center", alignItems: "flex-end", padding: 10 }}
  >
    <Button
      onPress={() => {
        Linking.openURL(href);
      }}
    >
      Discover it!
    </Button>
  </Layout>
);

export default class ProjectCard extends Component {
  render() { 
    return (
      <Card
        style={{
          minWidth: 300,
          width: "25%",
          maxWidth: 500,
          margin: '2%',
          height: 300,
          borderRadius: 25,
        }}
        header={(prop) => (
          <Header
            title={this.props.project.title}
            tag={this.props.project.tag}
          />
        )}
        footer={(prop) => <Footer href={this.props.project.href} />}
      >
        <Layout style={{height:'100%'}}>
          <Text>{this.props.project.description}</Text>
          {this.props.project.image_href !== "" ? (
          <Image
            style={{ width: 250, height: 100, marginTop:10 ,alignSelf:'center', resizeMode:'contain' }}
            source={{ uri: this.props.project.getImage_href() }}
          />
        ) : <View></View>}
        </Layout>
      </Card>
    );
  }
}
