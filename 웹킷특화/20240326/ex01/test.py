L, R = input().split()
arr1 = [0]*len(L)
arr2 = [0]*len(R)
if len(L) != len(R):
    print(0)
else:
    for i in range(len(L)):
        if L[i] == '8':
            arr1[i] =1
    for i in range(len(R)):
        if L[i] == '8':
            arr2[i] =1
    cnt = 0
    for i in range(12):
        if arr1[i] ==1 and arr2[i] ==1:
            cnt += 1
        else:
            break
    print(cnt)
