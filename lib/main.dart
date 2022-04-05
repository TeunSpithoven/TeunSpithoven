// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  static const String _title = 'Teun Spithoven';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      color: Color.fromRGBO(201, 228, 202, 100),
      home: Scaffold(
        appBar: AppBar(
          title: const Text(_title),
          backgroundColor:Color.fromRGBO(59, 96, 100, 100)
        ),
        body: const BodyWidget(),
      ),
    );
  }
}

class BodyWidget extends StatelessWidget {
  const BodyWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        color: Color.fromRGBO(135, 187, 162, 100),
        child: InkWell(
          splashColor: Color.fromRGBO(201, 228, 202, 100),
          onTap: () {
            debugPrint('Card tapped.');
          },
          child: const SizedBox(
            width: 300,
            height: 100,
            child: Text('A card that can be tapped'),
          ),
        ),
      ),
    );
  }
}
