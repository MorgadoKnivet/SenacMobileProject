import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type ProductCardProps = {
  title: string;
  calories: number;
  price: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  calories,
  price,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.calorieContainer}>
          <Text>🔥</Text>
          <Text> {calories} kcal</Text>
        </View>
        <Text style={styles.price}>{'$' + price}</Text>
      </View>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 132,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  calorieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    color: '#fef200',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginEnd: 16,
    marginTop: 16,
  },
});

export default ProductCard;
