import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Box textAlign="center" sx={{ mt: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add some products to get started!
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Shopping Cart ({cartItems.length} items)
        </Typography>
        <Button variant="outlined" color="error" onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flex: 2 }}>
          {cartItems.map((item) => (
            <Card key={item.product.id} sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={item.product.image}
                    alt={item.product.name}
                    sx={{ objectFit: 'cover', borderRadius: 1, width: 100 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.product.category}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      ${item.product.price}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="h6" sx={{ mx: 2 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" sx={{ minWidth: 80, textAlign: 'center' }}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography>${getTotalPrice().toFixed(2)}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Shipping:</Typography>
                <Typography>Free</Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">${getTotalPrice().toFixed(2)}</Typography>
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
              >
                Proceed to Checkout
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                onClick={() => window.history.back()}
              >
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
