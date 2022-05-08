import FormProduct from '@components/FromProducts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import axios from 'axios';

export default function Edit() {
  const [product, setProduct] = useState({});

  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    async function getProduct() {
      try {
        if (!router.isReady) return;
        const response = await axios.get(endPoints.products.getProduct(id));
        setProduct(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
