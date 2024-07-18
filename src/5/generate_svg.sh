echo -e "<svg version=\"1.1\"\n\twidth=\"190\" height=\"100\"\n\txmlns=\"http://www.w3.org/2000/svg\">"
echo -e "\t<rect width=\"100%\" height=\"100%\" fill=\"white\" />"
for i in $(seq 1 4 26)
	do awk -v var="$i" 'BEGIN{print "\t<line x1=\"0\" y1=\"" var*100.0/26.0 "\" x2=\"190\" y2=\"" var*100.0/26.0 "\" stroke=\"red\" stroke-width=\"" 100.0/13.0 "\" />"}'
done
awk 'BEGIN{print "\t<rect width=\"" 190.0*2.0/5.0 "\" height=\"" 100.0*7.0/13.0 "\" stroke=\"blue\" fill=\"blue\" />"}'
for i in $(seq 1 2 10)
	do
	for j in $(seq 1 2 12)
		# do awk -v var="$i" -v var2="$j" 'BEGIN{print "\t<circle cx=\"" 76.0/12.0*var2 "\" cy=\"" 70.0/13.0*var "\" r=\"" 100.0/13.0*4.0/5.0/2.0 "\" stroke=\"white\" />"}'
	do
		echo -ne "\t<polygon points=\""
		for k in $(seq 0 1 5)
			do awk -v var="$i" -v var2="$j" -v var3="$k" 'BEGIN{printf var2*6.33333+cos(1.25663*var3*2-1.57079)*2.00000 "," var*5.38462+sin(1.25663*var3*2-1.57079)*2.00000 " "}'
		done
		echo -e "\" stroke=\"white\" fill=\"white\" />"
	done
done
for i in $(seq 2 2 9)
	do
	for j in $(seq 2 2 11)
		do
		echo -ne "\t<polygon points=\""
		for k in $(seq 0 1 5)
			do awk -v var="$i" -v var2="$j" -v var3="$k" 'BEGIN{printf var2*6.33333+cos(1.25663*var3*2-1.57079)*2.00000 "," var*5.38462+sin(1.25663*var3*2-1.57079)*2.00000 " "}'
		done
		echo -e "\" stroke=\"white\" fill=\"white\" />"
	done
done
echo -e "</svg>"
