import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = async() => {
  
  const madolche = <Link href={'/product/66fe337a3412b83679dcc446'} className='text-orange-900'>Puddingcess Magidulce Chocolat-A-La-Mode</Link>

  return (
    <section className='bg-slate-900 grid grid-cols-12 py-10'>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
        <h1 className='text-3xl font-extrabold'>¿Quien Soy?</h1>
        <p className='text-xl font-bold'>Mi nombre es Federico, pero en internet me suelo encontrar como {'"Kaiju"'}, estoy estudiando Multimedia en la Universidad Maimonides, si encontraste esto es:<br></br> o que sos muy curioso<br></br> o que sos el profesor Leandro Amaro {'(en cuyo caso: Hola :D)'}<br></br> o que hubo una filtracion de documentos {'(no sabria de donde, pero mal ahi)'}.<br></br> Esta pagina la hice como un trabajo para aprender a hacer un Ecommerce, y decidi hacerla de cartas de YuGiOh! porque es un producto que aunque no lo parezca, son caros los cartones esos.</p>
        <Image
          src={`/imgs/buubb.png`}
          width={500}
          height={500}
          alt={'Kaiju Profile Pic'}
          className='rounded-3xl my-10'
        /> 
      </article>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
      <h1 className='text-3xl font-extrabold'>¿Que Hago?</h1>
      <p className='text-xl font-bold mb-16'>La verdad, no lo se ni yo, supuse que esta pagina deberia de estar, existir al menos. Tambien se me propone poner links a redes personales, pero no me gusta poner mis redes asi como asi. En cuanto a que pienso conseguir con esto, espero sacarme al menos un 8 en este trabajo {'(estoy escribiendo esto a las 4:45 de la mañana, y mi cama esa a unos pasos T-T)'} si todo sale bien, espero dar este verano {'(de 2024)'} dar los finales que devo de primero, y ya si eso, algunos de segundo</p>
      <Image
          src={`/imgs/logo-nerd.svg`}
          width={500}
          height={500}
          alt={'Logo de la tienda'}
          className='rounded-3xl my-10'
        /> 
      </article>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
      <h1 className='text-3xl font-extrabold'>¿Que parte del tabajo me gusto mas?</h1>
      <p className='text-xl font-bold'>Sinceramente el hacer la base de datos con MongoDB, por mas que no tengo instalado el Compass, de hecho, meti varias de mis cartas favoritas en este trabajo, siendo la que mas use cuando jugaba y mi favorita {madolche}, mas las demas cartas no se quedan atras</p>
      <Image
          src={`/imgs/hero.jpg`}
          width={500}
          height={500}
          alt={'Logo de la tienda'}
          className='rounded-3xl my-10'
        /> 
      </article>
    </section>
  )
}

export default About