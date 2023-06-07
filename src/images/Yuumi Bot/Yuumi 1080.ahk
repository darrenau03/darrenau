F12::
c = 0
search = true
break = false

Loop,
{
	if WinExist("ahk_class RiotWindowClass"){
		WinActivate
		if(c = 0){ ;check for ff or unlocked camera
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Camera Lock.png
			if (ErrorLevel = 0){
				Send {Space down}
				Random, rand, 20, 50
				Sleep %rand%
				Send {Space up}
			}
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Surrender.png
			if (ErrorLevel = 0){
				Send,{Enter Down}
				Send,{sleep 20}
				Send,{Enter Up}
				Send,/ff
				Send,{Enter Down}
				Send,{sleep 20}
				Send,{Enter Up}
			}
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Continue.png
			if (ErrorLevel = 0){
				break = true
				MsgBox, Game Over
			}
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Continue 2.png
			if (ErrorLevel = 0){
				break = true
				MsgBox, Game Over
			}
		}


	

		if(c=1){ ;buy stuff
			Send {p down}
			Random, rand, 20, 50
			Sleep %rand%
			Send {p up}

			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Item Shop.png
			if (ErrorLevel = 0){
				FoundY += 575
				FoundX += 25
				Send {Click %FoundX% %FoundY% Left 2}
				Random, rand, 20, 50
				Sleep %rand%
				Send {Click %FoundX% %FoundY% Left 2}
				Random, rand, 20, 50
				Sleep %rand%
				Send {Click %FoundX% %FoundY% Left 2}
				Random, rand, 20, 50
				Sleep %rand%
				Send {Click %FoundX% %FoundY% Left 2}
				Random, rand, 20, 50
				Sleep %rand%
			}


			Send {Esc down}
			Random, rand, 20, 50
			Sleep %rand%
			Send {Esc up}	
		}

		if(c = 2){ ;upgrade abilities
			send, {Ctrl down}
			send, {t down}
			send, {e down}
			send, {w down}
			send, {q down}
			Random, rand, 20, 50
			Sleep %rand%
			send, {e up}
			send, {q up}
			send, {w up}
			send, {t up}
			send, {Ctrl up} 
			Random, rand, 20, 50
			Sleep %rand%
		}

		if(c=3){ ;if found detached icon, path, otherwise use abilities
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Yuumi.png
			if (ErrorLevel = 0){
				MouseMove, 1929, 958 , 5
				Send, {o down}
				Random, rand, 20, 50
				Sleep %rand%
				Send, {w down}
				Random, rand, 20, 50
				Sleep %rand%
				Send, {w up}
				Random, rand, 20, 50
				Sleep %rand%	
				Send, {o up}
				Random, rand, 20, 50
				Sleep %rand%
			}else if(ErrorLevel = 1){
				Random, rand1, 0, A_ScreenWidth
				Random, rand2, 0, A_ScreenHeight
				MouseMove, %rand1%, %rand2%, 5
				send, {e down}
				send, {f down}
				send, {Numpad3 down}
				Random, rand, 20, 50
				Sleep %rand%
				send, {q down}
				send, {t down}
				Random, rand, 20, 50
				Sleep %rand%
				send, {e up}
				send, {q up}
				send, {t up}
				send, {f up}
				send, {Numpad3 up}
				Random, rand, 20, 50
				Sleep %rand%
			}
			c-=4
		}
		c+=1


		Random, rand, 3000, 5000
		Sleep %rand%
	}else if WinExist("ahk_class RCLIENT"){
		ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Find Match.png
		if (ErrorLevel = 0){
			FoundX += 125
			Send {Click %FoundX% %FoundY% Left 1}
		}
		ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Find Match2.png
		if (ErrorLevel = 0){
			FoundX += 150
			FoundY += 50
			Send {Click %FoundX% %FoundY% Left 1}
		}
		
		ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Lock In.png
		if (ErrorLevel = 0){
			FoundX += 10
			FoundY += 10
			Send {Click %FoundX% %FoundY% Left 1}
			Random, rand, 20, 50
			Sleep %rand%
			
		}

		if(%search% = true){
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Search.png
			if (ErrorLevel = 0){
				FoundX += 25
				FoundY += 5
				Send {Click %FoundX% %FoundY% Left 1}
				Send, yuumi
				search = false

				Random, rand, 20, 50
				Sleep %rand%
				FoundX -= 400
				FoundY += 50
				Send {Click %FoundX% %FoundY% Left 1}
			}
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Search2.png
			if (ErrorLevel = 0){
				FoundX += 25
				FoundY += 5
				Send {Click %FoundX% %FoundY% Left 1}
				Send, yuumi
				search = false

				Random, rand, 20, 50
				Sleep %rand%
				FoundX -= 400
				FoundY += 50
				Send {Click %FoundX% %FoundY% Left 1}
			}
			ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Search3.png
			if (ErrorLevel = 0){
				FoundX += 25
				FoundY += 5
				Send {Click %FoundX% %FoundY% Left 1}
				Send, yuumi
				search = false

				Random, rand, 20, 50
				Sleep %rand%
				FoundX -= 400
				FoundY += 50
				Send {Click %FoundX% %FoundY% Left 1}
			}



		}

		ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Accept.png
		if (ErrorLevel = 0){
			FoundX += 5
			FoundY += 5
			Send {Click %FoundX% %FoundY% Left 1}
		}
		ImageSearch, FoundX, FoundY, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\darre\Documents\Personal Files\Programming\AHK\Resources\Accept2.png
		if (ErrorLevel = 0){
			FoundX += 5
			FoundY += 5
			Send {Click %FoundX% %FoundY% Left 1}
		}
	}
	if (%break% = true){
		break
	}
}





ScrollLock::
break = true
return






