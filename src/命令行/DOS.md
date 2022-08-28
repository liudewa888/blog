# DOS命令
- 打开窗口,输入help显示所有命令行信息

```javascript
md 创建子目录
格式: MD[盘符：][路径名]〈子目录名〉
C:\>md y

CD 改变当前目录
格式：CD[盘符：][路径名][子目录名]
C:\>cd

RD——删除子目录命令
格式：RD[盘符：][路径名][子目录名]
C:\>rd y

DIR——显示磁盘目录命令
格式：DIR [盘符][路径][/P][/W]
C:\>dir y

PATH——路径设置命令(设备可执行文件的搜索路径，只对文件有效。)
格式：PATH[盘符1]目录[路径名1]{[；盘符2：]，〈目录路径名2〉…}
C:\>path
PATH=C:\WINDOWS;C:\WINDOWS\COMMAND;C:\PROGRAMFILES\MTS

COPY文件复制命令
格式：COPY[源盘][路径]〈源文件名〉[目标盘][路径][目标文件名]
C:\>copy yyy.txt yyy

TYPE——显示文件内容命令
格式：TYPE[盘符：][路径]〈文件名〉
C:\>trpe yyy.txt

EDIT——编辑文件内容命令
1.功能：编辑ASCII文件的内容，也可建立一个新文件。
2.类型：内部命令。
3. EDIT[盘符：][路径]〈文件名〉
说明： EDIT即可以编辑ASCII文件的内容，也可以新建立一个文件，他们的扩展名命名方式也很灵活，比如.txt、.bat,甚至可以编辑.c、.bas的格式。
FOR 8_1：
C:\>edit /*进入编辑模式*/
FOR 8_2：
C:\>edit yyy.txt /*---编辑yyy.txt文件的内容，如果要选择支持中文格式，应该安装UCDOS---*/

REN——文件改名命令
功能：更改文件名称
类型：内部命令ü
格式：REN[盘符：][路径]〈旧文件名〉〈新文件名〉
FOR 9：
C:\>ren yyy.txt cly.txt

DEL——删除文件命令
功能：删除指定的文件。ü
类型：内部命令ü
ü 格式：DEL[盘符：][路径]〈文件名〉[/P]
说明：选用/P参数，系统在删除前询问是否真要删除该文件，若不使用这个参数，则自动删除。

11．CLS——清屏幕命令
ü 功能：清除屏幕上的所有显示，光标置于屏幕左上角。
类型：内部命令ü
格式：CLSü
FOR 11：
C:\>CLS

12．VER查看系统版本号命令
功能：显示当前系统版本号ü
类型：内部命令ü
ü 格式：VER
FOR 12：
C:\>VER
Windows 98 [Version 4.10.2222] /*---当前系统的版本号---*/

13．DATA日期设置命令
功能：设置或显示系统日期。ü
类型：内部命令ü
ü 格式：DATE[mm—dd—yy]
FOR 13：
C:\>DATE
Current date is Sun 11-23-2
Enter new date (mm-dd-yy): /*---提示你输入新的日期---*/

14．TIME系统时钟设置命令
功能：设置或显示系统时期。ü
类型：内部命令ü
ü 格式：TIME[hh：mm：ss：xx]
FOR 14：
C:\>time
Current time is 22:49:28.81
Enter new time:

15．PROMPT：更改命令提示符
ü 功能：改变DOS系统提示符的风格。

uname 显示版本信息（同win2K的 ver）
dir 显示当前目录文件,ls -al 显示包括隐藏文件（同win2K的 dir）
pwd 查询当前所在的目录位置
cd cd　..回到上一层目录，注意cd 与..之间有空格。cd　/返回到根目录。
cat 文件名 查看文件内容
cat >abc.txt 往abc.txt文件中写上内容。
more 文件名 以一页一页的方式显示一个文本文件。
cp 复制文件
mv 移动文件
rm 文件名 删除文件，rm -a 目录名删除目录及子目录
mkdir 目录名 建立目录
rmdir 删除子目录，目录内没有文档。
chmod 设定档案或目录的存取权限
grep 在档案中查找字符串
diff 档案文件比较
find 档案搜寻
date 现在的日期、时间
who 查询目前和你使用同一台机器的人以及Login时间地点
w 查询目前上机者的详细资料
whoami 查看自己的帐号名称
groups 查看某人的Group
passwd 更改密码
history 查看自己下过的命令
ps 显示进程状态
kill 停止某进程
gcc 黑客通常用它来编译C语言写的文件
su 权限转换为指定使用者
telnet IP telnet连接对方主机（同win2K），当出现bash$时就说明连接成功。
ftp ftp连接上某服务器（同win2K）


calc-----------启动计算器

chkdsk.exe-----Chkdsk磁盘检查

compmgmt.msc---计算机管理

conf-----------启动 netmeeting

control userpasswords2-----User Account 权限设置

devmgmt.msc--- 设备管理器

diskmgmt.msc---磁盘管理实用程序

dfrg.msc-------磁盘碎片整理程序

drwtsn32------ 系统医生

dvdplay--------启动Media Player

dxdiag-----------DirectX Diagnostic Tool

gpedit.msc-------组策略编辑器

gpupdate /target:computer /force 强制刷新组策略

eventvwr.exe-----事件查看器

explorer-------打开资源管理器

logoff---------注销命令

lusrmgr.msc----本机用户和组

msinfo32---------系统信息

msconfig---------系统配置实用程序

net start (servicename)----启动该服务

net stop (servicename)-----停止该服务

notepad--------打开记事本

nusrmgr.cpl-------同control userpasswords，打开用户帐户控制面板

Nslookup-------IP地址侦测器

oobe/msoobe /a----检查XP是否激活

perfmon.msc----计算机性能监测程序

progman--------程序管理器

regedit----------注册表编辑器

regedt32-------注册表编辑器

regsvr32 /u *.dll----停止dll文件运行

route print------查看路由表

rononce -p ----15秒关机

rsop.msc-------组策略结果集

rundll32.exe rundll32.exe %Systemroot%System32shimgvw.dll,ImageView_Fullscreen----启动一个空白的Windows 图片和传真查看器

secpol.msc--------本地安全策略

services.msc---本地服务设置

sfc /scannow-----启动系统文件检查器

sndrec32-------录音机

taskmgr-----任务管理器（适用于2000／xp／2003）

tsshutdn-------60秒倒计时关机命令

winchat--------XP自带局域网聊天

winmsd---------系统信息

winver-----显示About Windows 窗口

wupdmgr-----------Windows Update

```

