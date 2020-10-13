import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

import { projects } from "./projects";
import { Dimensions, Linking, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import ProjectCard from "./component/ProjectCard";


const HomeScreen = () => (
  <ScrollView
  contentContainerStyle={{
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  }}
  style={{
    width:'100%',
    height:'90%',
  }}>
    {projects.map(function (values) {
      return <ProjectCard key={values.title} project={values} />;
    })}
    </ScrollView>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
  <SafeAreaView>
  <StatusBar/>
    <Layout
      style={{
        width: '100%',
        backgroundColor: "#EF6969",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text category='h3'>
        Pablo Gómez
      </Text>
    </Layout>
    <Layout
      style={{
        width: '100%',
        backgroundColor: "#FFAAAA",
        height: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text category='h4'>
        Projects
      </Text>
    </Layout>
    <HomeScreen />
    <Layout style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={{textAlign:'center'}}>You may contact me at: </Text>
      <Text onPress={() => { Linking.openURL('mailto:pgomezponce@gmail.com')}} style={{color:'blue', textDecorationLine:'underline'}}>
      pgomezponce@gmail.com
      </Text>

    </Layout>
    </SafeAreaView>
  </ApplicationProvider>
);
