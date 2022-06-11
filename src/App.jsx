import { useEffect, useState } from 'react';
import './App.css';
import ScoreBord from './components/scoreBoard';
import greenCandy from './images/green.jpg'
import orengeCandy from './images/orenge.png'
import BluCandy from './images/blue.png'
import prpCandy from './images/prp.png'
import starCandy from './images/star.jpg'
import yeCandy from './images/ye.png'
import blank from   './images/blank.png'


const width = 8
const candyColor =[
  BluCandy,
  greenCandy,
  orengeCandy,
  prpCandy,
  starCandy,
  yeCandy,

]



const App =()=> {

 

  const [currentColorArrey , setcurrentColorArrey] = useState([]);

  const [sqarBeibgDragged , setSquarBeibgSragged] =useState(null)
  const [sqarBeibgReplaced , setSquarBeibgReplaced] =useState(null)

  const [scoreDisplay , setscoreDisplay] = useState(0)
                                               //Test 3 in column
  const checkForColummofTree = () =>
  {
    for (let i=0 ; i < 47; i++)
    {
      const colummOfThree =[i , i +width , i+ width * 2]
      const decidedColor = currentColorArrey[i];
      const isBlank = currentColorArrey[i] === blank
       //  console.log("decidedColor" , decidedColor)

      if (colummOfThree.every(square => currentColorArrey[square] ===  decidedColor && !isBlank) )
      {
        setscoreDisplay((score) => score + 3)
        colummOfThree.forEach(square => currentColorArrey[square] = '')
        return true
        // console.log("emty" , currentColorArrey)
      }
    }
  }

                                             //  Test 4 in column

  const checkForColummofFour = () =>
  {
    for (let i=0 ; i < 39; i++)
    {
      const colummOfFFour =[i , i +width , i+ width * 2 , i + width *3]
      const decidedColor = currentColorArrey[i];
      const isBlank = currentColorArrey[i] === blank
      if (colummOfFFour.every(square => currentColorArrey[square] ===  decidedColor && !isBlank) )
      {
         setscoreDisplay((score) => score + 4)

         if(scoreDisplay >= 500 ){
            setscoreDisplay((score) => score +1500)
         
          console.log('bonus +1500' , scoreDisplay)
          
        }
        

        colummOfFFour.forEach(square => currentColorArrey[square] ='')
        return true
      }
    }
  }


                                      //checkForRowoofTree
  const checkForRowoofTree = () =>
  {
    for (let i=0 ; i <= 64; i++)
    {
      const rowOfTree =[i , i + 1 , i +2]
      const decidedColor = currentColorArrey[i];
      const notValid=[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64]
      const isBlank = currentColorArrey[i] === blank
      if (notValid.includes(i)) continue

      if (rowOfTree.every(square => currentColorArrey[square] ===  decidedColor && !isBlank  ) )
      {
        setscoreDisplay((score) => score + 4)
        rowOfTree.forEach(square => currentColorArrey[square] ='')
        return true
      }
    }
  }

                                            //checkForRowofFour
  const checkForRowofFour = () =>
  {
    for (let i=0 ; i < 64; i++)
    {
      const rowOfFour =[i , i + 1 , i +2 ,i+3]
      const decidedColor = currentColorArrey[i];
      const notValid=[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64]
      const isBlank = currentColorArrey[i] === blank
      if (notValid.includes(i)) continue

      if (rowOfFour.every(square => currentColorArrey[square] ===  decidedColor && !isBlank) )
      {
        setscoreDisplay((score) => score + 4)

        
        

        rowOfFour.forEach(square => currentColorArrey[square] ='')
        return true
      }
    }
  }

                                       // Color filling in an empty cell

  const movrIntoSquarBelow = ()=>{
    for (let i=0 ; i < 55; i++)
    {
      const firsrRow=[0,1,2,3,4,5,6,7]
      const isfirsrRow = firsrRow.includes(i)

      if(isfirsrRow && currentColorArrey[i] === '')
      {
       let randomNumber = Math.floor (Math.random() * candyColor.length)
       currentColorArrey[i] = candyColor[randomNumber];
      }

      if ((currentColorArrey [i + width ]) === '')
      {
          currentColorArrey[ i + width] = currentColorArrey[i];
          currentColorArrey[i] = '';

      }
    }
  }

  // _score =scoreDisplay
    // console.log('_score',_score , scoreDisplay)

  
                                           //       drag
   const dragStart = (e)=>{
    // console.log('dragstart',(e.target)  )
    setSquarBeibgSragged(e.target)
   }

   const dragDrop = (e)=>{
    // console.log('dragdrop' ,(e.target)  )
    setSquarBeibgReplaced(e.target)
   }

   const dargEnd = (_e)=>{
    // console.log('dragend' ,(e.target)  )
    
     const setSquarBeibgid = parseInt(sqarBeibgDragged.getAttribute('data-id'))
     const setSquarBeibgreid = parseInt(sqarBeibgReplaced.getAttribute('data-id'))

     currentColorArrey[ setSquarBeibgreid]= sqarBeibgDragged.getAttribute('src')
     currentColorArrey[ setSquarBeibgid]= sqarBeibgReplaced.getAttribute('src')

// console.log('setSquarDragedid'  ,setSquarBeibgid)
// console.log('setSquarBeibgid'  , setSquarBeibgreid)

// const validMoves =[
//   setSquarBeibgid -1,
//   setSquarBeibgid - width,
//   setSquarBeibgid +1,
//   setSquarBeibgid +width
  

// ]

// const  valiMove =   validMoves.includes(setSquarBeibgreid)

//  const isC_tree =checkForColummofFour()
//  const isC_fore=checkForColummofTree()
//  const isrfore=checkForRowofFour()
//  const isr_tree=checkForRowoofTree()

//  if( sqarBeibgReplaced && valiMove &&(isC_fore || isC_tree || isr_tree || isrfore))
//  {
//   setSquarBeibgSragged(null)
//   setSquarBeibgReplaced(null)
//  }
//  else{
//   currentColorArrey[setSquarBeibgreid] = sqarBeibgReplaced.getAttribute('src')
//   currentColorArrey[setSquarBeibgid] = sqarBeibgDragged.getAttribute('src')
//   setcurrentColorArrey([...currentColorArrey])

//  }

   }





                                       //Create a random color game board
  const createBord =()=>{
        const randomColorArrey =[]; 
       
      for (let i =0 ; i< width * width ; i++ )
         {
            const random0to5 = Math.floor(Math.random() * candyColor.length)
            const randomColor = candyColor[random0to5]
            randomColorArrey.push(randomColor)
        }
        setcurrentColorArrey(randomColorArrey);
        //  console.log(randomColorArrey)
  }

  useEffect(()=>{

    createBord()
   
  },[])

  useEffect (()=>{
  const timer = setInterval(()=>{
    checkForColummofFour();
    checkForColummofTree();
    checkForRowoofTree();
    checkForRowofFour();
    movrIntoSquarBelow()
    setcurrentColorArrey([...currentColorArrey])
  } , 50)
  return ()=> clearInterval(timer)

  } , [checkForColummofFour ,checkForColummofTree,currentColorArrey] ,checkForRowoofTree,checkForColummofFour,setcurrentColorArrey)

  return (
    <>
    <div>
    <ScoreBord score= {scoreDisplay} />
    </div>
    
    <div className="App">
        
       
             <div className="game">
                 {currentColorArrey.map((candyColor, index) =>
                 (
                   <img
                   key={index}
                   //  style={{backgroundColor:candyColor}} 
                   src = {candyColor}
                   alt={candyColor} 
                   data-id = {index}
                   draggable = {true}
                   onDragStart = {dragStart}
                   onDragOver = {(e) => e.preventDefault()}
                   onDragEnter = {(e) => e.preventDefault()}
                   onDragLeave = {(e) => e.preventDefault()}
                   onDrop = {dragDrop}
                   onDragEnd = {dargEnd}
                   />
                   ))}
        
                  
            </div>
            
    </div>
                   
                   </>
    
    );
  }

export default App;
